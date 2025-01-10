import { SSection } from './styles'
import { dados } from '../../services/dados'
import { ComponentCard } from '../../components'
export function List() {
    return(
        <SSection>
            {dados.map(item => (
                <ComponentCard
                    key={item.id}
                    data={item.data}
                    mensagem={item.mensagem}
                    titulo={item.titulo}
                />
            ))}
        </SSection>
    )
}