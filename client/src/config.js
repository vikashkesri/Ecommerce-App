let API;

if (process.env.NODE_ENV === "development") {
  API = "https://backend-ufwh.onrender.com/api/v1";
} else {
  API = "/api/v1";
}

export const server = API;



