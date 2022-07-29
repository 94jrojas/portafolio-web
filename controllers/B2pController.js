import axios from "utils/API";
import Axios from "axios";

export default class B2pController {
  constructor() {
    this.increaseCountSource = Axios.CancelToken.source();
    this.getCountSource = Axios.CancelToken.source();
  }

  increase = async () => {
    if (this.increaseCountSource) this.increaseCountSource.cancel();
    this.increaseCountSource = Axios.CancelToken.source();

    const response = await axios.post(
      `v1/b2p/counter`,
      {},
      { cancelToken: this.increaseCountSource.token }
    );

    return response.data;
  };

  get = async () => {
    if (this.getCountSource) this.getCountSource.cancel();
    this.getCountSource = Axios.CancelToken.source();

    const response = await axios.get(`v1/b2p/counter`, {
      cancel: this.increaseCountSource.token,
    });

    return response.data;
  };

  cancelAllTokens() {
    if (this.increaseCountSource) this.increaseCountSource.cancel();
    if (this.getCountSource) this.getCountSource.cancel();
  }
}
