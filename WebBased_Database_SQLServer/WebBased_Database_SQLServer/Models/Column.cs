﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebBased_Database_SQLServer.Models
{
    public class Column
    {
        public string TABLE_CATALOG { get; set; }
        public string TABLE_SCHEMA { get; set; }
        public string COLUMN_NAME { get; set; }
        public int ORDINAL_POSITION { get; set; }
        public string IS_NULLABLE { get; set; }
        public string DATA_TYPE { get; set; }

    }
}