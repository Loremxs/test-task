import { Avatar, Circle, Float } from "@chakra-ui/react";

const AvatarProfile = () => {
  return (
    <Avatar.Root colorPalette="red" variant="subtle" size={"sm"}>
      <Avatar.Fallback name="V B" />
      <Float placement="bottom-end" offsetX="2" offsetY="1">
        <Circle bg="red" size="12px" outlineColor="bg" />
      </Float>
    </Avatar.Root>
  );
};
export default AvatarProfile;
