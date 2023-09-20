import {FC} from "react";
import ForComponent from "../../shared/components/ForComponent.tsx";
import {DivContainer, DivElement} from "./styles.ts";
import COLORS from "../../shared/constants/Colors.ts";
import ContentLoader from "react-content-loader";
import {ELEMENTS_PER_PAGE_PERSONS_LIST} from "../../shared/constants/Elements.ts";

const Skeleton: FC = () => {

    return (
        <DivContainer>
            <ForComponent number={ELEMENTS_PER_PAGE_PERSONS_LIST}>
                <DivElement color={COLORS.green2}>
                    <ContentLoader
                        speed={1}
                        width={400}
                        height={76}
                        viewBox="0 0 400 76"
                        backgroundColor={COLORS.green3}
                        foregroundColor={COLORS.green2}
                    >
                        <rect x="0" y="5" rx="3" ry="3" width="270" height="6"/>
                        <rect x="0" y="25" rx="3" ry="3" width="270" height="6"/>
                        <rect x="0" y="45" rx="3" ry="3" width="270" height="6"/>
                    </ContentLoader>
                </DivElement>
            </ForComponent>
        </DivContainer>

    )
}
export default Skeleton