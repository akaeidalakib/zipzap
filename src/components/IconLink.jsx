import { Icon, Link } from "@chakra-ui/react";
export default function IconLink({ icon, target, stroke, ...props }) {
  return (
    <Link href={target} target="_blank" style={{ textDecoration: "none" }}>
      <Icon
        as={icon}
        w={"40px"}
        h={"40px"}
        stroke={stroke}
        _hover={{ color: "zzPurple.100", stroke: "zzPurple.100" }}
        {...props}
      />
    </Link>
  );
}
