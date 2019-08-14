Public Class SignInScreen

    Private Sub SignInScreen_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        tbxName.TabStop = False
        tbxAddres.TabStop = False

    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click

        Me.Hide()

    End Sub

    Private Sub tbxName_Enter(sender As Object, e As EventArgs) Handles tbxName.Enter

        tbxName.Text = ""
        tbxName.ForeColor = Color.Black

    End Sub

    Private Sub tbxAddres_Enter(sender As Object, e As EventArgs) Handles tbxAddres.Enter

        tbxAddres.Text = ""
        tbxAddres.ForeColor = Color.Black

    End Sub

    Private Sub tbxPassword_Enter(sender As Object, e As EventArgs) Handles tbxPassword.Enter

        tbxPassword.Text = ""
        tbxPassword.ForeColor = Color.Black

    End Sub

    Private Sub tbxRepeatPassword_Enter(sender As Object, e As EventArgs) Handles tbxRepeatPassword.Enter

        tbxRepeatPassword.Text = ""
        tbxRepeatPassword.ForeColor = Color.Black

    End Sub

    Private Sub btnSignIn_Click(sender As Object, e As EventArgs) Handles btnSignIn.Click

        If tbxName.Text <> "" And tbxName.Text <> "Admin" And tbxAddres.Text <> "" And
            tbxAddres.Text <> "admin@anima.edu.uy" And tbxPassword.Text <> "" And
            tbxPassword.Text <> "*********" And tbxRepeatPassword.Text <> "" And
            tbxRepeatPassword.Text <> "*********" Then

            MainScreen.ShowDialog()
            LobbyScreen.Close()
            Me.Close()

        Else

            lblError.Show()

        End If

    End Sub

End Class