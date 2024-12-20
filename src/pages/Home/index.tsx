import { SSection } from "./styles";
impot Image1 from  "../../assets/image1.png"
impot Image2 from  "../../assets/image2.png"
export function Home(){
    return(
        <SSection>
            <img src="{Image1}" alt="Imagem 1" />
            <img src="{Image2}" alt="Imagem 2" />
        </SSection>
    )
}