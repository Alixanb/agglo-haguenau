"use server";

export const checkPasswordValidity = (password: string | null): boolean => {
  /** Additional checks can go here */
  // console.log(
  //   password,
  //   process.env.ADMIN_PASS,
  //   password === process.env.ADMIN_PASS
  // );
  return password === process.env.ADMIN_PASS;
};
