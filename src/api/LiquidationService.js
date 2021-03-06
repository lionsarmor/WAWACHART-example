import axios from 'axios';
import {VUEX_LEVERAGES_LONG, VUEX_LEVERAGES_SHORT} from '../store/constants/bitmex'
const url = 'api/liquidations/liquidations'
const baseUrl = 'api/liquidations'
class LiquidationService {

    // Register
    static Liquidations(timeInterval,targetVolume, exchange, symbol,longleverages, shortleverages, update) {
        return new Promise(async(resolve, reject)=>{
            try {
                const res = await axios.post(url, {
                    "timeInterval": timeInterval,
                    "targetVolume":targetVolume,
                    "exchange":exchange,
                    "symbol":symbol,
                    VUEX_LEVERAGES_LONG: longleverages,
                    VUEX_LEVERAGES_SHORT: shortleverages,
                    "update": update
                })
                const data = res.data
                if (data.error) {
                    reject(data.error)
                }
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }

    static LiquidationBubbles() {
        return new Promise(async(resolve, reject)=> {
            try {
                const res = await axios.get(`${baseUrl}/bubbles`)
                const data = res.data
                if (data.error) {
                    reject(data.error)
                }
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }

    // Save options in user settings
    static SaveOpts(volume, timeInterval) {
        return new Promise(async(resolve, reject)=> {
            try {
                const res = await axios.post(`${url}/save`, {
                    volume,
                    timeInterval,
                },{
                    headers : {
                        Authorization: localStorage.getItem('token')
                    }
                })  
                const data = res.data
                if (data.error) {
                    reject(error)
                }
                resolve(data)
            } catch (err) {
                reject(err)
            }
           
        })
    }
}


export default LiquidationService