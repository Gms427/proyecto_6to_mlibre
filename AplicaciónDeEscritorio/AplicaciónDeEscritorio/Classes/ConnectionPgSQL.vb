Public Class ConnectionPgSQL
    Public Function AbrirConexion() As Npgsql.NpgsqlConnection
        Dim conexion As Npgsql.NpgsqlConnection
        conexion = New Npgsql.NpgsqlConnection()

        Dim cadenaDeConexion As String
        cadenaDeConexion = "Server=10.1.2.6;Port=5432;UserId='postgres';Password='anima2019';Database=nosbey_test"

        Try
            conexion.ConnectionString = cadenaDeConexion
            conexion.Open()
        Catch ex As Exception
            conexion.Close()
            Throw ex
        End Try

        Return conexion
    End Function
End Class
