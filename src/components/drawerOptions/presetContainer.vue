<template>
<v-card>
<v-container color="#161715" class="container-height">
<v-card-actions>
<button v-bind:style="zoneButton" v-on:click="getClass('zones')" class="font-white top-switch-button1">ZONES</button>                  
<button v-bind:style="metricButton" v-on:click="getClass('metrics')" class="font-white top-switch-button2">METRICS</button>                  
</v-card-actions>          
<br>        
<div v-show="tab == 'zones'">  
<v-btn color="#3aafef" class="font-white button-width" text @click="dialog = false">MAKE NEW PRESET</v-btn>
<button class="font-white middle-button-border">INT</button>                  
<v-btn color="#c03500" class="font-white button-width" text @click="dialog = false">SCALPER</v-btn>
</div>
<div v-show="tab == 'metrics'">  
<v-btn color="#3aafef" class="font-white button-width" text @click="dialog = false">MAKE NEW PRESET</v-btn>
<button class="font-white middle-button-border">INT</button>                  
<v-btn color="#c03500" class="font-white button-width" text @click="dialog = false">DAYTRADING</v-btn>
</div>
</v-container>
    </v-card>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex'
    import liquidationOptions from '@/components/drawerOptions/liquidationOptions'
    import mdrOptions from '@/components/drawerOptions/mdrOptions'


    export default {
        name: 'drawerContainer',

        data() {
            return {
                tab: 'zones',
                zoneButton: {
                backgroundColor:'green',
                },            
                metricButton: {
                backgroundColor:'purple',
                },  
                }
        },
        methods: {
            getClass(val) {
               if (val == 'zones') {
                this.zoneButton.backgroundColor = '#c03500'
                this.metricButton.backgroundColor = '#595959'
               }else {
                this.zoneButton.backgroundColor = '#595959'
                this.metricButton.backgroundColor = '#c03500'  
               }
               this.tab = val
            }
        },

        computed: {
            ...mapState({
                page_name: state => state.ui.page_name
            })
        },

        mounted() {
            this.getClass('zones')
        },
        components: {
            liquidationOptions,
            mdrOptions,
        },
    }
</script>

<style scoped>
    .title-mdr {
        font-size: 20px;
    }

    .middle-button {
        width: 150px;
    }
.middle-button-border {
  border: 2px solid #575757;
  background-color: transparent;
  color: white;
  cursor: pointer;
  height: 37px;
  width: 352px;
  margin-left:8px;
  border-radius: 3px;
  margin-top:10px;
    }
.top-switch-button1 {
  color: white;
  cursor: pointer;
  height: 27px;
  width: 400px;
  margin-left:-31.6px;
  border-radius: 0px;
  margin-top:10px;
  margin-top:-20px;
    }
.top-switch-button2 {
  color: white;
  cursor: pointer;
  margin-right:-31.5px;
  height: 27px;
  width: 400px;
  border-radius: 0px;
  margin-top:10px;
  margin-top:-20px;
    }
.button-right-margin {
    left:8px;
}
.settings-bar-button {
    width: 340px;
    font-size: 15px;
}
.disable-events {
  pointer-events: none
}
    .nowrap {
        white-space: nowrap;
    }

    .cursor {
        cursor: pointer;
    }
    .black {
    background-color:black
    }
    .zone-settings-button {
        width: 200px;
    }
    .font-offwhite {
        color: rgb(177, 174, 174);
    }
    .font-white {
        color: rgb(252, 252, 252) !important;
    }
    .size-20 {
        font-size: 18px;
    }
    .button-width {
        width: 352px;
        top:5px;
    }
    .container-height {
        height: 450px;
    }
</style>