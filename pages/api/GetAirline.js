import axios from "axios";
import { cms_trav_api, cms_trav_authcode, siteid } from "../../utils/static";

export const getairline = async () => {
  try {
    const body = { siteId: siteid };
    const resp = await axios.post(
      `${cms_trav_api}/airline-cache/showAirlineCachefareDatabySiteId?authcode=${cms_trav_authcode}`,
      body
    );
    const data = resp.data;
    return { data };
  } catch (error) {
    console.log("error", error);
    return {
      notFound: true,
    };
  }
};

export const getairlineDetails = async (url) => {
  try {
    const body = {
      siteId: siteid,
      url: url,
      language: "eng",
    };
    const resp = await axios.post(
      `${cms_trav_api}/airline-cache/getAirlinecachefaredataByUrl?authcode=${cms_trav_authcode}`,
      body
    );
    const datas = resp.data;
    return { datas };
  } catch (error) {
    console.log("error", error);
    return {
      Found: true,
    };
  }
};

export const airlineRoute = async (url) => {
  try {
    const body = {
      siteId: siteid,
      language: "eng",
      category: "airline-route",
      pageType: url,
    };

    const res = await axios.post(
      `${cms_trav_api}/route-source/showRouteSourcebyCategoryAndLanguageAndPagetype?authcode=${cms_trav_authcode}`,
      body
    );
    const airlineRouteresult = res.data;
    return { airlineRouteresult };
  } catch (error) {
    console.log("error", error);
    return {
      err: true,
    };
  }
};

export const airlineRouteDetails = async (url, pageType) => {
  try {
    const body = {
      siteId: siteid,
      language: "eng",
      category: "airline-route",
      pageType: pageType,
      url: url,
    };

    const res = await axios.post(
      `${cms_trav_api}/route-source/showRouteSourcebyCategoryAndLanguageAndPagetypeAndurl?authcode=${cms_trav_authcode}`,
      body
    );
    const airlineRouteDetailaResult = res.data;
    return { airlineRouteDetailaResult };
  } catch (error) {
    console.log("error", error);
    return {
      RouteDetailserr: true,
    };
  }
};

export const desitnationRoute = async () => {
  try {
    const body = {
      siteId: siteid,
      language: "eng",
      category: "airline-desitnation",
    };

    const res = await axios.post(
      `${cms_trav_api}/route-source/showRouteSourcebyCategoryAndLanguage?authcode=${cms_trav_authcode}`,
      body
    );
    const desitnationR = res.data;
    return { desitnationR };
  } catch (error) {
    console.log("error", error);
    return {
      desitnationerr: true,
    };
  }
};
export const destinationDetails = async (url) => {
  try {
    const body = {
      siteId: siteid,
      language: "eng",
      category: "airline-desitnation",
      url: url,
    };
    const res = await axios.post(
      `${cms_trav_api}/route-source/showRouteSourceDestinationUrl?authcode=${cms_trav_authcode}`,
      body
    );
    const destinationDe = res.data;
    return { destinationDe };
  } catch (error) {
    console.log("error", error);
    return {
      destinationDeEr: true,
    };
  }
};
