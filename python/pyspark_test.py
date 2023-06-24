from pyspark.sql import SparkSession
import pyspark.sql.types as T
import pyspark.sql.functions as F

# Create a SparkSession
spark = SparkSession.builder.master("local[*]").getOrCreate()

# Define the dictionary
data = [
    ("alice", 30, "kolkata"),
    ("bob", 29, "hyderabad"),
    ("ashesh", 34, "bangalore")
]

schema = T.StructType(
    [
        T.StructField("name", T.StringType()),
        T.StructField("age", T.IntegerType()),
        T.StructField("city", T.StringType()),
        ]
)

# Create a DataFrame from the dictionary
df = spark.createDataFrame(data, schema)

# Show the DataFrame
df.show()
