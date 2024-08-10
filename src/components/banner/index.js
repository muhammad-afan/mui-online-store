import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import { BannerContainer, BannerContent, BannerDescription, BannerImages, BannerTitle } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    // eslint-disable-next-line
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <BannerContainer>
                <BannerImages src="/images/banner/banner.png"/>
                <BannerContent>
                    <Typography variant="h6">Huge Collection</Typography>
                    <BannerTitle variant="h2">
                        New Bags
                    </BannerTitle>
                    <BannerDescription variant="subtitle">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, doloribus laborum culpa voluptates 
                    </BannerDescription>
                </BannerContent>
            </BannerContainer>
        </>
    )
}