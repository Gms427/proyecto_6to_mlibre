Imports Npgsql

Public Class CategoryDAL
    Private connectionClass As ConnectionPgSQL = New ConnectionPgSQL()
    Private connection As NpgsqlConnection = connectionClass.openConnection()

    Public Function GetCategories() As List(Of Category)
        ' Consulta a la base, crear la lista de Category y retornarla

        Dim queryString = "SELECT * FROM category WHERE id_category <> 0 ORDER BY name"

        Dim cmd = New NpgsqlCommand(queryString, connection)

        Dim reader As NpgsqlDataReader
        reader = cmd.ExecuteReader()

        Dim categoryList As List(Of Category) = New List(Of Category)

        If reader.HasRows Then
            While (reader.Read())

                Dim id = reader("id_category")
                Dim name = reader("name")

                Dim category As Category = New Category(id, name)

                categoryList.add(category)

            End While
        End If

        reader.Close()

        Return categoryList

    End Function

    Public Function AddCategory(name As String)

    End Function



End Class
