export default defineEventHandler(async (event) => {
  //   // handle query params
  //   const { name } = useQuery(event);

  //   // handle post data
  //   const { age } = await useBody(event);

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_o2vCzjsmPC1ELtCulVCl2sHr7oy0Jq576b2HmVDu"
  );

  return data;
});
