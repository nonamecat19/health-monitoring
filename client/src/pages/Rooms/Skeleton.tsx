import {FC} from "react";
import ForComponent from "../../shared/components/ForComponent.tsx";
import {DivContainer, DivElement} from "./styles.ts";
import COLORS from "../../shared/constants/Colors.ts";
import ContentLoader from "react-content-loader";

const Skeleton: FC = () => {

    return (
        <DivContainer>
            <ForComponent number={5}>
                <DivElement color={COLORS.green2}>
                    <ContentLoader
                        speed={1}
                        width={280}
                        height={60}
                        viewBox="0 0 280 60"
                        backgroundColor={COLORS.green3}
                        foregroundColor={COLORS.green2}
                    >
                        <rect x="0" y="0"   rx="3" ry="3" width="230" height="6"/>
                        <rect x="0" y="15"  rx="3" ry="3" width="230" height="6"/>
                    </ContentLoader>
                </DivElement>
            </ForComponent>
        </DivContainer>
    )
}
export default Skeleton