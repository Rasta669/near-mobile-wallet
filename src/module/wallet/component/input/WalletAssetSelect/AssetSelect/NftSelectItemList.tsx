import { Col } from "@peersyst/react-native-components";
import Typography from "module/common/component/display/Typography/Typography";
import { useTranslate } from "module/common/hook/useTranslate";
import MainListCard from "module/main/component/display/MainListCard/MainListCard";
import NftImage from "module/nft/component/display/NftImage/NftImage";
import useGetNfts from "module/nft/query/useGetNfts";
import { NftToken } from "near-peersyst-sdk";
import { memo } from "react";

export interface NftSelectItemProps {
    nft: NftToken;
}

export const NftSelectItem = memo(({ nft }: NftSelectItemProps) => {
    const {
        metadata: { title, media_url },
    } = nft;
    return (
        <MainListCard alignItems="center" gap="5%">
            <NftImage uri={media_url} />
            <Typography variant="body1Strong" numberOfLines={1}>
                {title}
            </Typography>
        </MainListCard>
    );
});

const NftSelectItemList = (): JSX.Element => {
    const { data: nfts = [] } = useGetNfts(4);
    const translate = useTranslate();
    return (
        <>
            {nfts.length > 0 && (
                <Col gap="3%">
                    <Typography variant="body2Strong" numberOfLines={1} light>
                        {translate("nfts")}
                    </Typography>
                    {nfts.map((nft, index) => (
                        <NftSelectItem nft={nft} key={index} />
                    ))}
                </Col>
            )}
        </>
    );
};

export default NftSelectItemList;
