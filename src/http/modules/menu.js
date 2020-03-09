import axios from '../axios'

/* 
 * 菜单管理模块
 */

 // 保存
export const save = (data) => {
    return axios({
        url: '/menu/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/menu/delete',
        method: 'post',
        data
    })
}
// 查找导航菜单树
export const findNavTree = (params) => {
    return axios({
        url: '/menu/listNavTree',
        method: 'get',
        params
    })
}
// 查找导航菜单树
export const findMenuTree = (params) => {
    return axios({
        url: '/menu/listMenuTree',
        method: 'get',
        params
    })
}