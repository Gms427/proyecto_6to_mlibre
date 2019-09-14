<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class ProductsListScreen
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(ProductsListScreen))
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.btnCloseApp = New System.Windows.Forms.Button()
        Me.lvPublications = New System.Windows.Forms.ListView()
        Me.lvIdProduct = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvName = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvReports = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvPrice = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.lvDescription = CType(New System.Windows.Forms.ColumnHeader(), System.Windows.Forms.ColumnHeader)
        Me.btnHow = New System.Windows.Forms.Button()
        Me.viewAlert = New System.Windows.Forms.Panel()
        Me.btnCloseAlert = New System.Windows.Forms.Button()
        Me.tbxAlert = New System.Windows.Forms.TextBox()
        Me.viewAlert.SuspendLayout()
        Me.SuspendLayout()
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.FlatAppearance.BorderSize = 0
        Me.imgNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(586, 5)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(195, 160)
        Me.imgNosbey.TabIndex = 38
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'btnPrevious
        '
        Me.btnPrevious.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnPrevious.BackgroundImage = CType(resources.GetObject("btnPrevious.BackgroundImage"), System.Drawing.Image)
        Me.btnPrevious.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnPrevious.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnPrevious.FlatAppearance.BorderSize = 0
        Me.btnPrevious.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnPrevious.Location = New System.Drawing.Point(1270, 15)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(37, 40)
        Me.btnPrevious.TabIndex = 41
        Me.btnPrevious.UseVisualStyleBackColor = False
        '
        'btnCloseApp
        '
        Me.btnCloseApp.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnCloseApp.BackgroundImage = CType(resources.GetObject("btnCloseApp.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseApp.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseApp.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseApp.FlatAppearance.BorderSize = 0
        Me.btnCloseApp.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseApp.Location = New System.Drawing.Point(1310, 15)
        Me.btnCloseApp.Name = "btnCloseApp"
        Me.btnCloseApp.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseApp.TabIndex = 39
        Me.btnCloseApp.UseVisualStyleBackColor = False
        '
        'lvPublications
        '
        Me.lvPublications.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.lvPublications.Columns.AddRange(New System.Windows.Forms.ColumnHeader() {Me.lvIdProduct, Me.lvName, Me.lvReports, Me.lvPrice, Me.lvDescription})
        Me.lvPublications.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lvPublications.ForeColor = System.Drawing.Color.White
        Me.lvPublications.Location = New System.Drawing.Point(203, 205)
        Me.lvPublications.Name = "lvPublications"
        Me.lvPublications.Size = New System.Drawing.Size(960, 460)
        Me.lvPublications.TabIndex = 42
        Me.lvPublications.UseCompatibleStateImageBehavior = False
        Me.lvPublications.View = System.Windows.Forms.View.Details
        '
        'lvIdProduct
        '
        Me.lvIdProduct.Text = "ID"
        '
        'lvName
        '
        Me.lvName.Text = "Nombre"
        Me.lvName.Width = 130
        '
        'lvReports
        '
        Me.lvReports.Text = "Cant. reportes"
        Me.lvReports.Width = 144
        '
        'lvPrice
        '
        Me.lvPrice.Text = "Precio"
        Me.lvPrice.Width = 66
        '
        'lvDescription
        '
        Me.lvDescription.Text = "Descripción"
        Me.lvDescription.Width = 551
        '
        'btnHow
        '
        Me.btnHow.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnHow.BackgroundImage = CType(resources.GetObject("btnHow.BackgroundImage"), System.Drawing.Image)
        Me.btnHow.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnHow.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnHow.FlatAppearance.BorderSize = 0
        Me.btnHow.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnHow.Location = New System.Drawing.Point(1230, 15)
        Me.btnHow.Name = "btnHow"
        Me.btnHow.Size = New System.Drawing.Size(37, 40)
        Me.btnHow.TabIndex = 54
        Me.btnHow.UseVisualStyleBackColor = False
        '
        'viewAlert
        '
        Me.viewAlert.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.viewAlert.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.viewAlert.Controls.Add(Me.tbxAlert)
        Me.viewAlert.Controls.Add(Me.btnCloseAlert)
        Me.viewAlert.Location = New System.Drawing.Point(501, 279)
        Me.viewAlert.Name = "viewAlert"
        Me.viewAlert.Size = New System.Drawing.Size(365, 210)
        Me.viewAlert.TabIndex = 55
        Me.viewAlert.Visible = False
        '
        'btnCloseAlert
        '
        Me.btnCloseAlert.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnCloseAlert.BackgroundImage = CType(resources.GetObject("btnCloseAlert.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseAlert.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseAlert.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseAlert.FlatAppearance.BorderSize = 0
        Me.btnCloseAlert.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseAlert.Location = New System.Drawing.Point(310, 10)
        Me.btnCloseAlert.Name = "btnCloseAlert"
        Me.btnCloseAlert.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseAlert.TabIndex = 31
        Me.btnCloseAlert.UseVisualStyleBackColor = False
        '
        'tbxAlert
        '
        Me.tbxAlert.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.tbxAlert.BorderStyle = System.Windows.Forms.BorderStyle.None
        Me.tbxAlert.Cursor = System.Windows.Forms.Cursors.Default
        Me.tbxAlert.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxAlert.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.tbxAlert.Location = New System.Drawing.Point(81, 72)
        Me.tbxAlert.Multiline = True
        Me.tbxAlert.Name = "tbxAlert"
        Me.tbxAlert.ReadOnly = True
        Me.tbxAlert.Size = New System.Drawing.Size(200, 65)
        Me.tbxAlert.TabIndex = 57
        Me.tbxAlert.Text = "Presione el ID de una de las denuncias para ver sus detalles"
        Me.tbxAlert.TextAlign = System.Windows.Forms.HorizontalAlignment.Center
        '
        'ProductsListScreen
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.viewAlert)
        Me.Controls.Add(Me.btnHow)
        Me.Controls.Add(Me.lvPublications)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnCloseApp)
        Me.Controls.Add(Me.imgNosbey)
        Me.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "ProductsListScreen"
        Me.Text = "ProductsListScreen"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        Me.viewAlert.ResumeLayout(False)
        Me.viewAlert.PerformLayout()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents imgNosbey As Button
    Friend WithEvents btnPrevious As Button
    Friend WithEvents btnCloseApp As Button
    Friend WithEvents lvPublications As ListView
    Friend WithEvents lvIdProduct As ColumnHeader
    Friend WithEvents lvName As ColumnHeader
    Friend WithEvents lvReports As ColumnHeader
    Friend WithEvents lvPrice As ColumnHeader
    Friend WithEvents lvDescription As ColumnHeader
    Friend WithEvents btnHow As Button
    Friend WithEvents viewAlert As Panel
    Friend WithEvents btnCloseAlert As Button
    Friend WithEvents tbxAlert As TextBox
End Class
