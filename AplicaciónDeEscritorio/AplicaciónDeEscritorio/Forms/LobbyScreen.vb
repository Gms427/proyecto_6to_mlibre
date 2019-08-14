Public Class LobbyScreen

    Private Sub btnLogIn_Click(sender As Object, e As EventArgs) Handles btnLogIn.Click

        LogInScreen.ShowDialog()

    End Sub

    Private Sub btnSignIn_Click(sender As Object, e As EventArgs) Handles btnSignIn.Click

        SignInScreen.ShowDialog()

    End Sub

    Private Sub btnCloseApp_Click(sender As Object, e As EventArgs) Handles btnCloseApp.Click

        CloseAppScreen.ShowDialog()

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim pgClass = New ConnectionPgSQL()

        Dim conn As Npgsql.NpgsqlConnection = pgClass.AbrirConexion()

        Dim queryString = "SELECT * FROM TEST;"

        Dim cmd = New Npgsql.NpgsqlCommand(queryString, conn)

        Dim reader As Npgsql.NpgsqlDataReader
        reader = cmd.ExecuteReader()

        If reader.HasRows Then
            While (reader.Read())
                Dim nombre = reader("nombre")

            End While
        End If



    End Sub
End Class