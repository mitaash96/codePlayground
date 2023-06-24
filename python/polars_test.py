import polars as pl

df = pl.read_csv(r"C:\Development\ultimateNakMuay\data\raw\wiki_events_bellator.csv")

df = pl.DataFrame(
    {
        "employee": ["mitaash", "ashesh", "praga", "vaibhav"],
        "yoe": [3, 10, 5, 5]
    }
)

print(df.to_pandas())