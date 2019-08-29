Imports System.Net
Public Class LogInScreen

    Private Sub LogInScreen_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        tbxAddres.TabStop = False
        Try
            Dim Request As HttpWebRequest = HttpWebRequest.Create("http://localhost:3000/test")
            Request.Proxy = Nothing
            Request.UserAgent = "test"

            Dim response As HttpWebResponse = Request.GetResponse
            Dim responseStream As System.IO.Stream = response.GetResponseStream

            Dim streamReader As New System.IO.StreamReader(responseStream)
            Dim data As String = streamReader.ReadToEnd
            lblTestNode.Text = data
            lblTestNode.Show()
            streamReader.Close()

        Catch ex As Exception
            Throw ex
            lblTestNode.Text = "error en el server"
            lblTestNode.Show()
        End Try

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

            MainScreen.ShowDialog()
            LobbyScreen.Close()
            Me.Close()

        Else

            lblError.Show()

        End If

    End Sub

End Class
