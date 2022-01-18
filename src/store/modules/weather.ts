import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios';

@Module({ namespaced: true })
class Weather extends VuexModule {
  public weather = {};

  @Mutation
  public setWeather(weather: Record<string, unknown>): void {
    this.weather = weather;
  }

  @Action({ rawError: true })
  public async getId(city: string): Promise<void> {
    const url = `weather?q=${city}&appid=335ae019206e3019ec47299826ec54d0`;
    const response = await axios({
      method: 'GET',
      url: url,
    });
    const weather: Record<string, unknown> = response.data;
    this.context.commit('setWeather', weather);
  }
}
export default Weather;
