import {FC} from "react";
import {ForComponent} from "../../shared/components";
import {DivContainer, DivElement, FiltersSpace} from "./styles.ts";
import {COLORS, ELEMENTS_PER_PAGE_LIST} from "../../shared/constants";
import ContentLoader from "react-content-loader";

export const Skeleton: FC = () => {
  return (
    <DivContainer>
      <FiltersSpace/>
      <ForComponent number={ELEMENTS_PER_PAGE_LIST}>
        <DivElement color={COLORS.green2}>
          <ContentLoader
            speed={1}
            width={280}
            height={60}
            viewBox="0 0 280 60"
            backgroundColor={COLORS.green3}
            foregroundColor={COLORS.green2}
          >
            <rect x="0" y="0" rx="3" ry="3" width="230" height="6"/>
            <rect x="0" y="15" rx="3" ry="3" width="230" height="6"/>
          </ContentLoader>
        </DivElement>
      </ForComponent>
    </DivContainer>
  )
}
