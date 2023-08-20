document.getElementById("read-csv").addEventListener("click", function() {
    var csvFile = document.getElementById("csv-file").files[0];
    var reader = new FileReader();
    reader.onload = function() {
        var data = reader.result;
        var rows = data.split("\n");
        var table = document.getElementById("table-container");
        table.classList.remove("hidden");
        var isFirstRow = true;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i].split(",");
            var tr = document.createElement("tr");

            if (isFirstRow) {
                // Set the first row as table headers
                for (var j = 0; j < row.length; j++) {
                    var th = document.createElement("th");
                    th.textContent = row[j];
                    tr.appendChild(th);
                }
                isFirstRow = false;
            } else {
                var mergedData = [];
                var mergedIndex = 0;

                for (var j = 0; j < row.length; j++) {
                    if (row[j].startsWith('"') && !row[j].endsWith('"')) {
                        // Merge values until an ending double-quote is found
                        mergedData[mergedIndex] = row[j];
                        while (!row[j].endsWith('"') && j < row.length - 1) {
                            j++;
                            mergedData[mergedIndex] += ',' + row[j];
                        }
                        mergedIndex++;
                    } else {
                        var td = document.createElement("td");
                        td.textContent = row[j];
                        tr.appendChild(td);
                    }
                }

                // Append merged data cells to the row
                for (var k = 0; k < mergedData.length; k++) {
                    var td = document.createElement("td");
                    td.textContent = mergedData[k].replace(/"/g, "");
                    tr.appendChild(td);
                }
            }
            table.querySelector("tbody").appendChild(tr);
        }
    };
    reader.readAsText(csvFile);
});
