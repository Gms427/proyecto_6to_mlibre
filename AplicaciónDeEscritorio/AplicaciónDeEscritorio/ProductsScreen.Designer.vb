﻿<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class ProductsScreen
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()>
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
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(ProductsScreen))
        Me.PictureBox3 = New System.Windows.Forms.PictureBox()
        Me.backgroundProducts = New System.Windows.Forms.Panel()
        Me.gbxProductMain = New System.Windows.Forms.GroupBox()
        Me.gbxVendedor = New System.Windows.Forms.GroupBox()
        Me.lblDescription = New System.Windows.Forms.TextBox()
        Me.lblDescriptionTitle = New System.Windows.Forms.Label()
        Me.gbxInteraction = New System.Windows.Forms.GroupBox()
        Me.lblReports = New System.Windows.Forms.Label()
        Me.lblPrice = New System.Windows.Forms.Label()
        Me.lblProduct = New System.Windows.Forms.Label()
        Me.btnLayOff = New System.Windows.Forms.Button()
        Me.btnDisregard = New System.Windows.Forms.Button()
        Me.btnDelete = New System.Windows.Forms.Button()
        Me.gbxImages = New System.Windows.Forms.GroupBox()
        Me.img3 = New System.Windows.Forms.PictureBox()
        Me.img2 = New System.Windows.Forms.PictureBox()
        Me.img1 = New System.Windows.Forms.PictureBox()
        Me.imgMain = New System.Windows.Forms.PictureBox()
        Me.titNosbey = New System.Windows.Forms.Button()
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.btnLogOut = New System.Windows.Forms.Button()
        Me.btnCloseApp = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.backgroundAlert = New System.Windows.Forms.Panel()
        Me.viewAlert = New System.Windows.Forms.Panel()
        Me.btnCloseAlert = New System.Windows.Forms.Button()
        Me.lblAction = New System.Windows.Forms.Label()
        Me.btnAcceptAction = New System.Windows.Forms.Button()
        Me.btnCancelAction = New System.Windows.Forms.Button()
        CType(Me.PictureBox3, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.backgroundProducts.SuspendLayout()
        Me.gbxProductMain.SuspendLayout()
        Me.gbxVendedor.SuspendLayout()
        Me.gbxInteraction.SuspendLayout()
        Me.gbxImages.SuspendLayout()
        CType(Me.img3, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.img2, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.img1, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.imgMain, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.backgroundAlert.SuspendLayout()
        Me.viewAlert.SuspendLayout()
        Me.SuspendLayout()
        '
        'PictureBox3
        '
        Me.PictureBox3.BackgroundImage = CType(resources.GetObject("PictureBox3.BackgroundImage"), System.Drawing.Image)
        Me.PictureBox3.Location = New System.Drawing.Point(12, 199)
        Me.PictureBox3.Name = "PictureBox3"
        Me.PictureBox3.Size = New System.Drawing.Size(0, 0)
        Me.PictureBox3.TabIndex = 4
        Me.PictureBox3.TabStop = False
        '
        'backgroundProducts
        '
        Me.backgroundProducts.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.backgroundProducts.Controls.Add(Me.backgroundAlert)
        Me.backgroundProducts.Controls.Add(Me.gbxProductMain)
        Me.backgroundProducts.Location = New System.Drawing.Point(-16, 160)
        Me.backgroundProducts.Name = "backgroundProducts"
        Me.backgroundProducts.Size = New System.Drawing.Size(1395, 715)
        Me.backgroundProducts.TabIndex = 27
        '
        'gbxProductMain
        '
        Me.gbxProductMain.Controls.Add(Me.gbxVendedor)
        Me.gbxProductMain.Controls.Add(Me.gbxInteraction)
        Me.gbxProductMain.Controls.Add(Me.gbxImages)
        Me.gbxProductMain.Location = New System.Drawing.Point(276, 20)
        Me.gbxProductMain.Name = "gbxProductMain"
        Me.gbxProductMain.Size = New System.Drawing.Size(839, 345)
        Me.gbxProductMain.TabIndex = 32
        Me.gbxProductMain.TabStop = False
        '
        'gbxVendedor
        '
        Me.gbxVendedor.Controls.Add(Me.lblDescription)
        Me.gbxVendedor.Controls.Add(Me.lblDescriptionTitle)
        Me.gbxVendedor.Location = New System.Drawing.Point(430, 125)
        Me.gbxVendedor.Name = "gbxVendedor"
        Me.gbxVendedor.Size = New System.Drawing.Size(405, 215)
        Me.gbxVendedor.TabIndex = 34
        Me.gbxVendedor.TabStop = False
        '
        'lblDescription
        '
        Me.lblDescription.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.lblDescription.BorderStyle = System.Windows.Forms.BorderStyle.None
        Me.lblDescription.Font = New System.Drawing.Font("Microsoft Sans Serif", 9.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblDescription.Location = New System.Drawing.Point(15, 45)
        Me.lblDescription.Multiline = True
        Me.lblDescription.Name = "lblDescription"
        Me.lblDescription.Size = New System.Drawing.Size(385, 165)
        Me.lblDescription.TabIndex = 27
        Me.lblDescription.Text = resources.GetString("lblDescription.Text")
        '
        'lblDescriptionTitle
        '
        Me.lblDescriptionTitle.AutoSize = True
        Me.lblDescriptionTitle.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.lblDescriptionTitle.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblDescriptionTitle.Location = New System.Drawing.Point(10, 20)
        Me.lblDescriptionTitle.Name = "lblDescriptionTitle"
        Me.lblDescriptionTitle.Size = New System.Drawing.Size(92, 20)
        Me.lblDescriptionTitle.TabIndex = 26
        Me.lblDescriptionTitle.Text = "Descripción"
        Me.lblDescriptionTitle.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'gbxInteraction
        '
        Me.gbxInteraction.Controls.Add(Me.lblReports)
        Me.gbxInteraction.Controls.Add(Me.lblPrice)
        Me.gbxInteraction.Controls.Add(Me.lblProduct)
        Me.gbxInteraction.Controls.Add(Me.btnLayOff)
        Me.gbxInteraction.Controls.Add(Me.btnDisregard)
        Me.gbxInteraction.Controls.Add(Me.btnDelete)
        Me.gbxInteraction.Location = New System.Drawing.Point(430, 15)
        Me.gbxInteraction.Name = "gbxInteraction"
        Me.gbxInteraction.Size = New System.Drawing.Size(405, 105)
        Me.gbxInteraction.TabIndex = 32
        Me.gbxInteraction.TabStop = False
        '
        'lblReports
        '
        Me.lblReports.AutoSize = True
        Me.lblReports.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.lblReports.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblReports.ForeColor = System.Drawing.Color.Red
        Me.lblReports.Location = New System.Drawing.Point(5, 74)
        Me.lblReports.Name = "lblReports"
        Me.lblReports.Size = New System.Drawing.Size(198, 20)
        Me.lblReports.TabIndex = 28
        Me.lblReports.Text = "Cantidad de denuncias: 17"
        '
        'lblPrice
        '
        Me.lblPrice.AutoSize = True
        Me.lblPrice.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.lblPrice.Font = New System.Drawing.Font("Microsoft Sans Serif", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblPrice.ForeColor = System.Drawing.Color.Green
        Me.lblPrice.Location = New System.Drawing.Point(5, 48)
        Me.lblPrice.Name = "lblPrice"
        Me.lblPrice.Size = New System.Drawing.Size(77, 25)
        Me.lblPrice.TabIndex = 27
        Me.lblPrice.Text = "$2599"
        '
        'lblProduct
        '
        Me.lblProduct.AutoSize = True
        Me.lblProduct.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.lblProduct.Font = New System.Drawing.Font("Microsoft Sans Serif", 18.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblProduct.Location = New System.Drawing.Point(5, 20)
        Me.lblProduct.Name = "lblProduct"
        Me.lblProduct.Size = New System.Drawing.Size(253, 29)
        Me.lblProduct.TabIndex = 26
        Me.lblProduct.Text = "Championes Adidas "
        Me.lblProduct.TextAlign = System.Drawing.ContentAlignment.MiddleLeft
        '
        'btnLayOff
        '
        Me.btnLayOff.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnLayOff.BackgroundImage = CType(resources.GetObject("btnLayOff.BackgroundImage"), System.Drawing.Image)
        Me.btnLayOff.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnLayOff.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnLayOff.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnLayOff.FlatAppearance.BorderSize = 0
        Me.btnLayOff.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnLayOff.Location = New System.Drawing.Point(280, 20)
        Me.btnLayOff.Name = "btnLayOff"
        Me.btnLayOff.Size = New System.Drawing.Size(33, 32)
        Me.btnLayOff.TabIndex = 29
        Me.btnLayOff.UseVisualStyleBackColor = False
        '
        'btnDisregard
        '
        Me.btnDisregard.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnDisregard.BackgroundImage = CType(resources.GetObject("btnDisregard.BackgroundImage"), System.Drawing.Image)
        Me.btnDisregard.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnDisregard.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnDisregard.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnDisregard.FlatAppearance.BorderSize = 0
        Me.btnDisregard.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnDisregard.Location = New System.Drawing.Point(330, 20)
        Me.btnDisregard.Name = "btnDisregard"
        Me.btnDisregard.Size = New System.Drawing.Size(25, 32)
        Me.btnDisregard.TabIndex = 31
        Me.btnDisregard.UseVisualStyleBackColor = False
        '
        'btnDelete
        '
        Me.btnDelete.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnDelete.BackgroundImage = CType(resources.GetObject("btnDelete.BackgroundImage"), System.Drawing.Image)
        Me.btnDelete.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnDelete.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnDelete.FlatAppearance.BorderColor = System.Drawing.SystemColors.ScrollBar
        Me.btnDelete.FlatAppearance.BorderSize = 0
        Me.btnDelete.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnDelete.ForeColor = System.Drawing.Color.Transparent
        Me.btnDelete.Location = New System.Drawing.Point(370, 20)
        Me.btnDelete.Name = "btnDelete"
        Me.btnDelete.Size = New System.Drawing.Size(25, 32)
        Me.btnDelete.TabIndex = 30
        Me.btnDelete.UseVisualStyleBackColor = False
        '
        'gbxImages
        '
        Me.gbxImages.Controls.Add(Me.img3)
        Me.gbxImages.Controls.Add(Me.img2)
        Me.gbxImages.Controls.Add(Me.img1)
        Me.gbxImages.Controls.Add(Me.imgMain)
        Me.gbxImages.Location = New System.Drawing.Point(5, 15)
        Me.gbxImages.Name = "gbxImages"
        Me.gbxImages.Size = New System.Drawing.Size(420, 325)
        Me.gbxImages.TabIndex = 33
        Me.gbxImages.TabStop = False
        '
        'img3
        '
        Me.img3.BackgroundImage = CType(resources.GetObject("img3.BackgroundImage"), System.Drawing.Image)
        Me.img3.Location = New System.Drawing.Point(10, 215)
        Me.img3.Name = "img3"
        Me.img3.Size = New System.Drawing.Size(95, 95)
        Me.img3.TabIndex = 10
        Me.img3.TabStop = False
        '
        'img2
        '
        Me.img2.BackgroundImage = CType(resources.GetObject("img2.BackgroundImage"), System.Drawing.Image)
        Me.img2.Location = New System.Drawing.Point(10, 114)
        Me.img2.Name = "img2"
        Me.img2.Size = New System.Drawing.Size(95, 95)
        Me.img2.TabIndex = 9
        Me.img2.TabStop = False
        '
        'img1
        '
        Me.img1.BackgroundImage = CType(resources.GetObject("img1.BackgroundImage"), System.Drawing.Image)
        Me.img1.Location = New System.Drawing.Point(10, 13)
        Me.img1.Name = "img1"
        Me.img1.Size = New System.Drawing.Size(95, 95)
        Me.img1.TabIndex = 8
        Me.img1.TabStop = False
        '
        'imgMain
        '
        Me.imgMain.BackColor = System.Drawing.SystemColors.ButtonFace
        Me.imgMain.BackgroundImage = CType(resources.GetObject("imgMain.BackgroundImage"), System.Drawing.Image)
        Me.imgMain.Location = New System.Drawing.Point(110, 12)
        Me.imgMain.Name = "imgMain"
        Me.imgMain.Size = New System.Drawing.Size(300, 300)
        Me.imgMain.TabIndex = 7
        Me.imgMain.TabStop = False
        '
        'titNosbey
        '
        Me.titNosbey.BackColor = System.Drawing.Color.Transparent
        Me.titNosbey.BackgroundImage = CType(resources.GetObject("titNosbey.BackgroundImage"), System.Drawing.Image)
        Me.titNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.titNosbey.Enabled = False
        Me.titNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.titNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.titNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.titNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.titNosbey.Location = New System.Drawing.Point(10, 10)
        Me.titNosbey.Name = "titNosbey"
        Me.titNosbey.Size = New System.Drawing.Size(0, 0)
        Me.titNosbey.TabIndex = 28
        Me.titNosbey.UseVisualStyleBackColor = False
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(525, 15)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(303, 128)
        Me.imgNosbey.TabIndex = 29
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'btnLogOut
        '
        Me.btnLogOut.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnLogOut.BackgroundImage = CType(resources.GetObject("btnLogOut.BackgroundImage"), System.Drawing.Image)
        Me.btnLogOut.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnLogOut.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnLogOut.FlatAppearance.BorderSize = 0
        Me.btnLogOut.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnLogOut.Location = New System.Drawing.Point(1275, 15)
        Me.btnLogOut.Name = "btnLogOut"
        Me.btnLogOut.Size = New System.Drawing.Size(35, 40)
        Me.btnLogOut.TabIndex = 31
        Me.btnLogOut.UseVisualStyleBackColor = False
        '
        'btnCloseApp
        '
        Me.btnCloseApp.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnCloseApp.BackgroundImage = CType(resources.GetObject("btnCloseApp.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseApp.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseApp.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseApp.FlatAppearance.BorderSize = 0
        Me.btnCloseApp.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseApp.Location = New System.Drawing.Point(1310, 15)
        Me.btnCloseApp.Name = "btnCloseApp"
        Me.btnCloseApp.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseApp.TabIndex = 30
        Me.btnCloseApp.UseVisualStyleBackColor = False
        '
        'btnPrevious
        '
        Me.btnPrevious.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnPrevious.BackgroundImage = CType(resources.GetObject("btnPrevious.BackgroundImage"), System.Drawing.Image)
        Me.btnPrevious.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnPrevious.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnPrevious.FlatAppearance.BorderSize = 0
        Me.btnPrevious.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnPrevious.Location = New System.Drawing.Point(1275, 15)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(37, 40)
        Me.btnPrevious.TabIndex = 34
        Me.btnPrevious.UseVisualStyleBackColor = False
        '
        'backgroundAlert
        '
        Me.backgroundAlert.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.backgroundAlert.Controls.Add(Me.viewAlert)
        Me.backgroundAlert.Location = New System.Drawing.Point(475, 145)
        Me.backgroundAlert.Name = "backgroundAlert"
        Me.backgroundAlert.Size = New System.Drawing.Size(445, 195)
        Me.backgroundAlert.TabIndex = 35
        Me.backgroundAlert.Visible = False
        '
        'viewAlert
        '
        Me.viewAlert.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.viewAlert.Controls.Add(Me.btnCancelAction)
        Me.viewAlert.Controls.Add(Me.btnAcceptAction)
        Me.viewAlert.Controls.Add(Me.lblAction)
        Me.viewAlert.Controls.Add(Me.btnCloseAlert)
        Me.viewAlert.Location = New System.Drawing.Point(10, 10)
        Me.viewAlert.Name = "viewAlert"
        Me.viewAlert.Size = New System.Drawing.Size(425, 175)
        Me.viewAlert.TabIndex = 36
        '
        'btnCloseAlert
        '
        Me.btnCloseAlert.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.btnCloseAlert.BackgroundImage = CType(resources.GetObject("btnCloseAlert.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseAlert.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseAlert.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseAlert.FlatAppearance.BorderSize = 0
        Me.btnCloseAlert.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseAlert.Location = New System.Drawing.Point(385, 0)
        Me.btnCloseAlert.Name = "btnCloseAlert"
        Me.btnCloseAlert.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseAlert.TabIndex = 31
        Me.btnCloseAlert.UseVisualStyleBackColor = False
        '
        'lblAction
        '
        Me.lblAction.AutoSize = True
        Me.lblAction.Font = New System.Drawing.Font("Berlin Sans FB", 15.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblAction.Location = New System.Drawing.Point(23, 60)
        Me.lblAction.Name = "lblAction"
        Me.lblAction.Size = New System.Drawing.Size(379, 23)
        Me.lblAction.TabIndex = 32
        Me.lblAction.Text = "¿Realmente quiere eliminar la publicación?"
        Me.lblAction.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'btnAcceptAction
        '
        Me.btnAcceptAction.Font = New System.Drawing.Font("Berlin Sans FB", 9.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnAcceptAction.Location = New System.Drawing.Point(125, 105)
        Me.btnAcceptAction.Name = "btnAcceptAction"
        Me.btnAcceptAction.Size = New System.Drawing.Size(75, 25)
        Me.btnAcceptAction.TabIndex = 38
        Me.btnAcceptAction.Text = "Aceptar"
        Me.btnAcceptAction.UseVisualStyleBackColor = True
        '
        'btnCancelAction
        '
        Me.btnCancelAction.Font = New System.Drawing.Font("Berlin Sans FB", 9.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnCancelAction.Location = New System.Drawing.Point(225, 105)
        Me.btnCancelAction.Name = "btnCancelAction"
        Me.btnCancelAction.Size = New System.Drawing.Size(75, 25)
        Me.btnCancelAction.TabIndex = 39
        Me.btnCancelAction.Text = "Cancelar"
        Me.btnCancelAction.UseVisualStyleBackColor = True
        '
        'ProductsScreen
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnLogOut)
        Me.Controls.Add(Me.btnCloseApp)
        Me.Controls.Add(Me.imgNosbey)
        Me.Controls.Add(Me.titNosbey)
        Me.Controls.Add(Me.PictureBox3)
        Me.Controls.Add(Me.backgroundProducts)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "ProductsScreen"
        Me.Text = "Producto"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        CType(Me.PictureBox3, System.ComponentModel.ISupportInitialize).EndInit()
        Me.backgroundProducts.ResumeLayout(False)
        Me.gbxProductMain.ResumeLayout(False)
        Me.gbxVendedor.ResumeLayout(False)
        Me.gbxVendedor.PerformLayout()
        Me.gbxInteraction.ResumeLayout(False)
        Me.gbxInteraction.PerformLayout()
        Me.gbxImages.ResumeLayout(False)
        CType(Me.img3, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.img2, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.img1, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.imgMain, System.ComponentModel.ISupportInitialize).EndInit()
        Me.backgroundAlert.ResumeLayout(False)
        Me.viewAlert.ResumeLayout(False)
        Me.viewAlert.PerformLayout()
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents PictureBox3 As PictureBox
    Friend WithEvents backgroundProducts As Panel
    Friend WithEvents titNosbey As Button
    Friend WithEvents imgNosbey As Button
    Friend WithEvents gbxProductMain As GroupBox
    Friend WithEvents gbxVendedor As GroupBox
    Friend WithEvents lblDescriptionTitle As Label
    Friend WithEvents gbxInteraction As GroupBox
    Friend WithEvents lblReports As Label
    Friend WithEvents lblPrice As Label
    Friend WithEvents lblProduct As Label
    Friend WithEvents btnLayOff As Button
    Friend WithEvents btnDisregard As Button
    Friend WithEvents btnDelete As Button
    Friend WithEvents gbxImages As GroupBox
    Friend WithEvents img3 As PictureBox
    Friend WithEvents img2 As PictureBox
    Friend WithEvents img1 As PictureBox
    Friend WithEvents imgMain As PictureBox
    Friend WithEvents btnLogOut As Button
    Friend WithEvents btnCloseApp As Button
    Friend WithEvents lblDescription As TextBox
    Friend WithEvents btnPrevious As Button
    Friend WithEvents backgroundAlert As Panel
    Friend WithEvents viewAlert As Panel
    Friend WithEvents btnCloseAlert As Button
    Friend WithEvents lblAction As Label
    Friend WithEvents btnCancelAction As Button
    Friend WithEvents btnAcceptAction As Button
End Class
