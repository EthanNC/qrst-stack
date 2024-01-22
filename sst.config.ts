import { SSTConfig } from "sst";
import { Database } from "./stacks/Database";
import { Api } from "./stacks/Api";

import { Web } from "./stacks/Web";

export default {
  config(_input) {
    return {
      name: "qrst-stack",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Database).stack(Api).stack(Web);
  },
} satisfies SSTConfig;
