Public Class ReportDetails
    Private publicationController As PublicationController = New PublicationController()

    Private Sub btnCloseApp_Click(sender As Object, e As EventArgs) Handles btnCloseApp.Click

        CloseAppScreen.ShowDialog()

    End Sub

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click

        Me.Hide()

    End Sub

    Private Sub ReportDetails_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        lvReports.Items.Clear()

        Dim counter As Integer = 0

        Dim listReports = publicationController.GetReports()

        For Each rep As Report In listReports

            lvReports.Items.Add(rep.IdUser)
            lvReports.Items(counter).SubItems.Add(rep.Description)

            counter = counter + 1
        Next

    End Sub

End Class