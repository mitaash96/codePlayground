import pandas as pd
import numpy as np
import asyncio
import pickle


async def mineResults(**kwargs):
    input_df = pd.read_csv(kwargs["input_path"])
    event_list = input_df[~input_df["#"].isna()]["Event"].to_list()
    dfs = []
    event_sample = list(np.random.choice(event_list, size=10))


    async def getResultsTable(event):
        getUrl = lambda x: "https://en.wikipedia.org/wiki/{}".format(x.replace(' ', '_'))
        event_url = getUrl(event)
        print(f"Fetching table for {event_url}")
        
        async def pack(url):
            try:
                df = await asyncio.to_thread(pd.read_html, url, attrs={"class": "toccolours"})
                dfs.append({event: df})
            except:
                url = url.rsplit(':', maxsplit=1)
                if len(url)>1:
                    return await pack(url[0])
        
        return await pack(event_url)

    tasks = [asyncio.create_task(getResultsTable(_)) for _ in event_sample]

    await asyncio.gather(*tasks)

    pickle_file = kwargs["output_path"]

    with open(pickle_file, "wb") as f:
        pickle.dump(dfs, f)


asyncio.run(
    mineResults(
        input_path = r"C:\Development\ultimateNakMuay\data\raw\wiki_events_ufc.csv",
        output_path = r"C:\Development\ultimateNakMuay\notebooks\pickle_objects\fighter_ufc_payload_async.pkl",
        )
    )