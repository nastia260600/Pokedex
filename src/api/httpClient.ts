import axios from 'axios'
/* создаем axios-экземпляр внутри этого файла, 
   чтобы мы могли повторно использовать его в приложении вместо того, 
   чтобы каждый раз импортировать axios 
*/
export const httpClient = axios.create()