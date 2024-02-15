import {Injectable} from '@nestjs/common';
import {cloneDeep, map} from 'lodash';

type MappingObject = Record<string, any>;
type ConfigObject = Record<string, string>;

@Injectable()
export class MapperService {
  public map<T extends MappingObject>(object: T, config: ConfigObject) {
    const newObject: T = cloneDeep(object);
    for (const [key, value] of Object.entries(config)) {
      const keys = key.split('.');
      this.replaceKeyRecursion(newObject, keys, value);
    }
    return newObject;
  }

  public mapArray<T extends MappingObject>(array: T[], config: ConfigObject) {
    return map(array, item => this.map(item, config));
  }

  public mapArrayWithPrefix<T extends MappingObject>(
    object: T,
    config: ConfigObject,
    prefix?: string
  ) {
    const target = prefix ? object[prefix] : object;
    const mappedObject = this.mapArray(target, config);
    if (!prefix) {
      return mappedObject;
    }
    return {
      ...object,
      [prefix]: mappedObject,
    };
  }

  public replaceKeyRecursion(object: Record<string, any>, keys: string[], targetKey: string) {
    if (keys.length > 1) {
      const [first, ...rest] = keys;
      return this.replaceKeyRecursion(object[first], rest, targetKey);
    }
    const key = keys[0];
    const value = cloneDeep(object[key]);
    delete object[key];
    object[targetKey] = value;
  }
}
