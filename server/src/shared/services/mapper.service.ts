import {Injectable} from '@nestjs/common';
import {clone, map, mapKeys} from 'lodash';

type MappingObject = Record<string, any>;
type ConfigObject = Record<string, string>;

@Injectable()
export class MapperService {
  public map<T extends MappingObject>(object: T, config: ConfigObject) {
    const newObject = clone(object);
    return mapKeys(newObject, (value, key) => {
      return config[key] || key;
    });
  }

  public mapArray<T extends MappingObject>(array: T[], config: ConfigObject) {
    return map(array, item => this.map(item, config));
  }
}
