import CallToAction from "../components/CallToAction";
import ContentImgLeft from "../components/ContentImgLeft"
import ContentImgRight from "../components/ContentImgRight";
import Rotulo from "../components/Rotulo"
import banhotosa from "../imagens/imagens-banho-e-tosa/banho-tosa.jpg";
import vacina from "../imagens/imagens-banho-e-tosa/vacina-cachorro.jpg"

function BanhoTosa(){
    return(
        <div>
            <Rotulo rotulo='Banho e Tosa'/>
            <ContentImgLeft imagem={banhotosa} textoImagem='cachorro no banho' texto='Etiam luctus odio vel turpis cursus bibendum. Pellentesque laoreet libero eu ultrices faucibus. Donec convallis lorem at nibh laoreet, et venenatis leo accumsan. Vivamus sapien lorem, sodales ut dignissim sed, pharetra vel turpis. Donec congue tellus nisi, vitae imperdiet eros semper vel. Phasellus lorem leo, ultricies quis arcu sit amet, facilisis vulputate augue. Donec non consectetur tortor. Sed bibendum dolor sit amet enim dignissim egestas. Quisque at dui non ipsum vehicula rhoncus. Vivamus at sapien nec libero placerat pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris egestas magna tortor, in porttitor elit sodales commodo. Morbi id sapien orci. Sed eget dolor eget elit finibus tincidunt.'/>
            
            <CallToAction texto='PET CARE'/>
            
            <ContentImgRight imagem={vacina} textoImagem='cachorro vacinado' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices lobortis sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum porttitor arcu at gravida mollis. Nulla nec sollicitudin arcu. Vivamus aliquam lorem eget eros placerat dictum. In augue enim, interdum quis fringilla ac, auctor vitae nibh. Aenean eget elementum sem, quis venenatis nisl.'/>
        </div>
    )
}

export default BanhoTosa