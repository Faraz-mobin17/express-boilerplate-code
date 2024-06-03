import { DemoRepository } from "../repositories";
import { DemoService } from "../services";

const Demo = new DemoService(new DemoRepository());

export const demoController = async (req, res) => {
  return res.send("hello world");
};
