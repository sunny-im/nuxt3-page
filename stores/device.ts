import { defineStore } from 'pinia'

interface DeviceState {
  device: string;
}

export const useDeviceStore = defineStore('device', {
  state: (): DeviceState => ({ device: 'PC' }),
  getters: {
    getDevice: (state) => state.device,
  },
  actions: {
    setDevice(value: string) {
      this.device = value;
    },
  },
})