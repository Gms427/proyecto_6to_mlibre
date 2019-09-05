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

    'private sub button1_click(sender as object, e as eventargs)
    '    dim pgclass = new connectionpgsql()

    '    dim conn as npgsql.npgsqlconnection = pgclass.openconnection()

    '    dim querystring = "select * from test;"

    '    dim cmd = new npgsql.npgsqlcommand(querystring, conn)

    '    dim reader as npgsql.npgsqldatareader
    '    reader = cmd.executereader()

    '    if reader.hasrows then
    '        while (reader.read())
    '            dim nombre = reader("nombre")

    '        end while
    '    end if

    'end sub
End Class