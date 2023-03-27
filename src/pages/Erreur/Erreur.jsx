import E404 from '../../components/E404/E404'
import { useEffect } from 'react'

function Erreur() {
    useEffect(() => {
        document.title = `Kasa : Erreur 404`
      })

    return (
        <E404 />
    )
}
  
export default Erreur