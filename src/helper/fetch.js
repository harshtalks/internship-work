import { JOB_API, PROFILE_API } from "./apiRoutes";

export const fetchJobs = async () => {
  let result;

  try {
    result = await fetch(JOB_API);

    if (!result.ok) {
      throw new Error(`Error! status: ${result.status}`);
    }

    const data = await result.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchProfile = async () => {
  let result;

  try {
    result = await fetch(PROFILE_API);

    if (!result.ok) {
      throw new Error(`Error! status: ${result.status}`);
    }

    const data = await result.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
