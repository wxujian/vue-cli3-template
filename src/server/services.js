/**
 * Created by tengteng on 18/7/17.
 */

import axios from './axios';

/**
 * 统一处理所有接口请求
 * 参数对象将会替换axios中默认参数中的键值对，其中可包含：
 * method
 * timeout
 * data
 * headers
 * dataType
 */
const requests = {
  getSumData() { //
    return axios('/fp/index/alarms', {
      method: 'get'
    })
  },
  getNetworkData() { // 获取网络数据库保密系统数据
    return axios('/fp/index/ndss', {
      method: 'get'
    })
  },
  getNetworkTime() { // 获取网络数据库保密系统时间
    return axios('/fp/index_time/ndss', {
      method: 'get'
    })
  },
  getCensorship() { // 获取入网保密系统数据
    return axios('/fp/index/nsrs', {
      method: 'get'
    })
  },
  getCockhorse() { // 获取涉密计算机违规外联数据
    return axios('/fp/index/vomp', {
      method: 'get'
    })
  },
  getSummary() { // 获取特种木马数据
    return axios('/fp/index/stms', {
      method: 'get'
    })
  },
  getLastPort() { // 获取机关单位互联网门户网站数据
    return axios('/fp/index/pssp', {
      method: 'get'
    })
  },
  getTestData(data) { // 告警事件数据
    console.log(data);
    return axios('fp/union/events?currentPage=' + data.currentPage + '&size=' + data.size + '&ip=' + data.ip + '&mac=' + data.mac + '&key=' + data.key + '&startTime=' + data.startTime + '&endTime=' + data.endTime + '&modules=' + data.modules, {
      method: 'get'
    });
  },
  postOutputData(data) { // 导出数据 => 选中本页
    console.log(data);
    return axios('fp/union/export/onePage', {
      method: 'post',
      data: data,
      responseType: 'arraybuffer'
    });
  },
  postOutputAllData(data) { // 导出数据 => 选中所有数据
    console.log(data);
    return axios('fp/union/export/allPage', {
      method: 'post',
      data: data,
      responseType: 'arraybuffer'
    });
  },
  getCssNum() { // 获取安全通人员数量
    return axios('/fp/index/css', {
      method: 'get'
    })
  },
  putKeepCount(data) { // 保存安全通人员数量
    return axios('fp/index/css/' + data, {
      method: 'put'
    })
  }
};

export default requests;
