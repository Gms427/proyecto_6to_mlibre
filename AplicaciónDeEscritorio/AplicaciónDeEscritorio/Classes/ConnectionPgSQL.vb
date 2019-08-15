Public Class ConnectionPgSQL
    Public Function openConnection() As Npgsql.NpgsqlConnection
        Dim connection As Npgsql.NpgsqlConnection
        connection = New Npgsql.NpgsqlConnection()

        Dim connectionString As String
        connectionString = "Server=127.0.0.1;Port=5432;UserId='postgres';Password='root';Database=nosbey_db"

        Try
            connection.ConnectionString = connectionString
            connection.Open()
        Catch ex As Exception
            connection.Close()
            Throw ex
        End Try

        Return connection
    End Function
End Class

