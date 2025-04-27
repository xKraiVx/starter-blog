import { v4 as uuidv4 } from "uuid";

export default {
  beforeCreate: async (event) => {
    const data = event.params.data;

    const uuid = uuidv4();

    data.uuid = uuid;
  },
};
