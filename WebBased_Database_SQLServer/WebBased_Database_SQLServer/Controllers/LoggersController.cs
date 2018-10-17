using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Mvc;

namespace WebBased_Database_SQLServer.Controllers
{
    public class LoggersController : Controller
    {
        // GET: Loggers
        public ActionResult Index()
        {
            var ctx = new WebBased_Database_SQLServer.Models.ApplicationDbContext();
            string sql = "SELECT " +
                "   SessionId = s.session_id,  \n " +
            " UserProcess = CONVERT(CHAR(1), s.is_user_process),  \n " +
            " LoginInfo = s.login_name, \n " +
          "   DbInstance = ISNULL(db_name(r.database_id), N''), \n " +
                    "   LastCommandBatch = (select text from sys.dm_exec_sql_text(c.most_recent_sql_handle)) , \n " +
           "  TaskState = ISNULL(t.task_state, N''), \n " +
           "  Command = ISNULL(r.command, N''), \n " +
           "  App = ISNULL(s.program_name, N''), \n " +
          "   WaitTime_ms = ISNULL(w.wait_duration_ms, 0), \n " +
           "  WaitType = ISNULL(w.wait_type, N''), \n " +
         " WaitResource = ISNULL(w.resource_description, N''), \n " +
          "   BlockBy = ISNULL(CONVERT(varchar, w.blocking_session_id), ''), \n " +
          "   HeadBlocker =  \n " +
         "         CASE \n " +
          "            -- session has active request; is blocked; blocking others \n  \n " +
         "             WHEN r2.session_id IS NOT NULL AND r.blocking_session_id = 0 THEN '1' \n " +
           "           -- session idle; has an open tran; blocking others \n " +
           "           WHEN r.session_id IS NULL THEN '1' \n " +
           "           ELSE '' \n " +
          "        END,  \n " +
          "   TotalCPU_ms = s.cpu_time, \n " +
          "   TotalPhyIO_mb = (s.reads + s.writes) * 8 / 1024,  \n " +
         "    MemUsage_kb = s.memory_usage * 8192 / 1024,  \n " +
         "    OpenTrans = ISNULL(r.open_transaction_count, 0),  \n " +
          "   LoginTime = s.login_time,  \n " +
          "   LastReqStartTime = s.last_request_start_time, \n " +
          "   HostName = ISNULL(s.host_name, N''), \n " +
          "   NetworkAddr = ISNULL(c.client_net_address, N''),  \n " +
         "    ExecContext = ISNULL(t.exec_context_id, 0), \n " +
          "   ReqId = ISNULL(r.request_id, 0), \n " +
         "    WorkLoadGrp = N'' \n " +
         " FROM sys.dm_exec_sessions s LEFT OUTER JOIN sys.dm_exec_connections c ON(s.session_id = c.session_id) \n " +
         " LEFT OUTER JOIN sys.dm_exec_requests r ON(s.session_id = r.session_id)" +
         " LEFT OUTER JOIN sys.dm_os_tasks t ON(r.session_id = t.session_id AND r.request_id = t.request_id) \n " +
         " LEFT OUTER JOIN \n " +
         " ( \n " +
           "   --Using row_number to select longest wait for each thread, \n " +

          "   --should be representative of other wait relationships if thread has multiple involvements. \n " +
          "  SELECT *, ROW_NUMBER() OVER(PARTITION BY waiting_task_address ORDER BY wait_duration_ms DESC) AS row_num \n " +
          "    FROM sys.dm_os_waiting_tasks \n " +
         " ) w ON(t.task_address = w.waiting_task_address) AND w.row_num = 1 \n " +
         " LEFT OUTER JOIN sys.dm_exec_requests r2 ON(r.session_id = r2.blocking_session_id) \n " +
         " OUTER APPLY sys.dm_exec_sql_text(r.sql_handle) as st \n " +

         " WHERE s.session_Id > 50-- ignore anything pertaining to the system spids. \n " +

         " AND s.session_Id NOT IN(@@SPID)-- let's avoid our own query! :)";
            DataSet ds = new DataSet();
            string constr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection con = new SqlConnection(constr))
            {
                string query = sql;
                using (SqlCommand cmd = new SqlCommand(query))
                {
                    cmd.Connection = con;
                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        sda.Fill(ds);
                    }
                }
            }
            return View(ds);
        }
    }
}