import {FC} from "react";
import {DetailsContainer} from "../../shared/styles";
import {COLORS} from "../../shared/constants";
import {DivElement} from "./styles.ts";
import {ForComponent} from "../../shared/components";
import ContentLoader from "react-content-loader"
import {ELEMENTS_PER_PAGE_RECORDS} from "../../shared/constants";

export const Skeleton: FC = () => {
  return (
    <DetailsContainer>
      <ForComponent number={ELEMENTS_PER_PAGE_RECORDS}>
        <DivElement color={COLORS.green2}>
          <ContentLoader
            speed={1}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor={COLORS.green3}
            foregroundColor={COLORS.green2}
          >
            <rect x="0" y="20" rx="3" ry="3" width="350" height="6"/>
            <rect x="0" y="40" rx="3" ry="3" width="350" height="6"/>
            <rect x="0" y="60" rx="3" ry="3" width="350" height="6"/>
            <rect x="0" y="80" rx="3" ry="3" width="350" height="6"/>
            <rect x="0" y="100" rx="3" ry="3" width="350" height="6"/>
            <rect x="0" y="120" rx="3" ry="3" width="350" height="6"/>
            <rect x="0" y="140" rx="3" ry="3" width="350" height="6"/>
          </ContentLoader>
        </DivElement>
      </ForComponent>
    </DetailsContainer>
  )
}
