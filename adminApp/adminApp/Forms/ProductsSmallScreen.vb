Public Class ProductsSmallScreen

    Private Sub btnCloseApp_Click(sender As Object, e As EventArgs) Handles btnCloseApp.Click

        'ActiveForm.Close()
        CloseAppScreen.Show()

    End Sub

    Private Sub btnLogIn_Click(sender As Object, e As EventArgs) Handles btnLogIn.Click

        LogInScreen.ShowDialog()

    End Sub

    Private Sub btnSignIn_Click(sender As Object, e As EventArgs) Handles btnSignIn.Click

        SignInScreen.ShowDialog()

    End Sub

End Class