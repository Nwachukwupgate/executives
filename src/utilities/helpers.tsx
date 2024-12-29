export function parseJwt(token: string): null | {
    email: string;
    iat?: number;
    exp?: number;
  } {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  
    return JSON.parse(jsonPayload);
  }
  
  export function tokenIsValid(
    parsedToken:
      | null
      | undefined
      | {
          email: string;
          iat?: number;
          exp?: number;
        }
  ) {
    return (
      parsedToken &&
      parsedToken.exp &&
      new Date(parsedToken.exp * 1000) > new Date()
    );
  }
  
  export function epochToHumanReadableDate(epoch: number) {
    const date = new Date(epoch);
    const monthMap: Record<number, string> = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
  
    return `${monthMap[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
  }