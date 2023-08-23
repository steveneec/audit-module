//Emulate service
export async function signin(params: { email: string; password: string }) {
  await delay(1000);

  if (params.email === "admin@audit.io" && params.password === "mypass") {
    return {
      name: "Admin",
      role: ["__admin", "__evaluator"],
      isAuthenticated: true,
    };
  }

  if (params.email === "eval@audit.io" && params.password === "evalpass") {
    return {
      name: "Evaluator",
      role: ["__evaluator"],
      isAuthenticated: true,
    };
  }
  return false;
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
