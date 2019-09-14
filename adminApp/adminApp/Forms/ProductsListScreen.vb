Imports Npgsql

Public Class ProductsListScreen
    Private publicationController As PublicationController = New PublicationController()

    Private Sub btnPrevious_Click(sender As Object, e As EventArgs) Handles btnPrevious.Click

        Me.Hide()

    End Sub

    Private Sub btnCloseApp_Click(sender As Object, e As EventArgs) Handles btnCloseApp.Click

        CloseAppScreen.ShowDialog()

    End Sub

    Private Sub ProductsListScreen_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        lvPublications.Items.Clear()

        Dim counter As Integer = 0

        Dim listPublication = publicationController.GetPublication()

        For Each pub As Publication In listPublication

            Dim fullPrice = ""

            Select Case pub.Currency
                Case Constants.Currencies.USD
                    fullPrice = "USD " + pub.Price.ToString()
                Case Constants.Currencies.UYU
                    fullPrice = "UYU " + pub.Price.ToString()
                Case Constants.Currencies.EUR
                    fullPrice = "EUR " + pub.Price.ToString()
            End Select

            lvPublications.Items.Add(pub.Id)
            lvPublications.Items(counter).SubItems.Add(pub.Name)
            lvPublications.Items(counter).SubItems.Add(pub.Reports)
            lvPublications.Items(counter).SubItems.Add(fullPrice)
            lvPublications.Items(counter).SubItems.Add(pub.Description)

            counter = counter + 1
        Next

        lvPublications.AutoResizeColumns(ColumnHeaderAutoResizeStyle.HeaderSize)

        lvIdProduct.Width = 60
        lvName.Width = 170
        lvPrice.Width = 120
        lvDescription.Width = 450

    End Sub

    'Private Sub lvPublications_ItemMouseHover(sender As Object, e As ListViewItemMouseHoverEventArgs) Handles lvPublications.ItemMouseHover

    '   ReportDetails.ShowDialog()

    'End Sub

    Private Sub lvPublications_ItemActivate(sender As Object, e As EventArgs) Handles lvPublications.ItemActivate

        ReportDetails.ShowDialog()

    End Sub

    Private Sub btnHow_Click(sender As Object, e As EventArgs) Handles btnHow.Click

        viewAlert.Show()

    End Sub

    Private Sub btnCloseAlert_Click(sender As Object, e As EventArgs) Handles btnCloseAlert.Click

        viewAlert.Hide()

    End Sub
End Class