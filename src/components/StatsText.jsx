import { Heading } from "@chakra-ui/react";
export const StatsText = ({ children }: { children: ReactNode }) => (
  <Heading as={"span"} color={"zzPink.100"} fontSize="lg">
    {children}
  </Heading>
);

export const StatsTextXl = ({ children }: { children: ReactNode }) => (
  <Heading as={"span"} color={"zzPink.100"} fontSize="xl">
    {children}
  </Heading>
);
