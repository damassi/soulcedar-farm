import { Center } from "../components/Center";

export default function Deploy() {
  return (
    <Center>
      <form
        target="_blank"
        action="https://api.netlify.com/build_hooks/614ad256da0f94653daaeef5"
        method="post"
      >
        <input type="submit" name="deploy" value="Deploy Site" />
      </form>
    </Center>
  );
}
