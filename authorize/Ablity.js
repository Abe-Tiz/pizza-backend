import { AbilityBuilder, Ability } from "@casl/ability";

export const defineAbilitiesFor = (role) => {
  const { can, rules } = new AbilityBuilder(Ability);

  if (role === "admin") {
    can("manage", "Dashboard");
  } else {
    can("read", "Dashboard");
  }

  return rules;
};
