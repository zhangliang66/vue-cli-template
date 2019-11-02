/**
 * article模块接口列表
 */
import axios from '@/axios/http'; // 导入http中创建的axios实例

const article = {    
    // post提交    
    login (params) {        
        return axios.post('/login', params);    
    }
    // 其他接口…………
}

export default article;