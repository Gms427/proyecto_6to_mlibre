Public Class LogInScreen

    Private Sub LogInScreen_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        tbxAddres.TabStop = False

    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click

        Me.Hide()

    End Sub

    Private Sub tbxAddres_Enter(sender As Object, e As EventArgs) Handles tbxAddres.Enter

        tbxAddres.Text = ""
        tbxAddres.ForeColor = Color.Black

    End Sub

    Private Sub tbxPassword_Enter(sender As Object, e As EventArgs) Handles tbxPassword.Enter

        tbxPassword.Text = ""
        tbxPassword.ForeColor = Color.Black

    End Sub

    Private Sub btnLogIn_Click(sender As Object, e As EventArgs) Handles btnLogIn.Click

        If tbxAddres.Text <> "" And tbxAddres.Text <> "admin@anima.edu.uy" And
            tbxPassword.Text <> "" And tbxPassword.Text <> "*********" Then

            lblError.Hide()
            MainScreen.ShowDialog()
            LobbyScreen.Close()
            Me.Close()

        Else

            lblError.Show()

        End If

    End Sub
End Class
